import React from 'react';
import PropTypes from 'prop-types';

function getId(id, optionId) {
  return `${id}-${optionId}`;
}

class FormsOverviewList extends React.Component {
  componentWillMount() {
    this.setState({
      activeDescendant: null,
      currentIndex: 0,
      selectedOptions: {},
    });
  }

  focusHandler() {
    if (!this.state.activeDescendant) {
      const currentIndex = this.state.currentIndex || 0;
      this.setState({
        ...this.state,
        activeDescendant: this.state.activeDescendant || this.props.list[currentIndex].id,
        currentIndex,
      });
    }
  }

  optionKeyHandler(event, optionId) {
    let { currentIndex } = this.state;
    switch (event.key) {
      case ' ':
      case 'Enter':
        this.setState({
          ...this.state,
          selectedOptions: {
            ...this.state.selectedOptions,
            [optionId]: !this.state.selectedOptions[optionId],
          },
        });
        if (!this.state.selectedOptions[optionId]) {
          this.props.selectHandler(optionId);
        } else {
          this.props.unSelectHandler(optionId);
        }
        break;
      case 'ArrowDown':
        currentIndex = Math.min(this.state.currentIndex + 1, this.props.list.length - 1);
        this.setState({
          ...this.state,
          activeDescendant: this.props.list[currentIndex].id,
          currentIndex,
        });
        break;
      case 'ArrowUp':
        currentIndex = Math.max(this.state.currentIndex - 1, 0);
        this.setState({
          ...this.state,
          activeDescendant: this.props.list[currentIndex].id,
          currentIndex,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      id, label, multiSelectable, list,
    } = this.props;
    const numberOfSelectedForms =
      Object.values(this.state.selectedOptions).filter(item => item === true).length;
    return (
      <div>
        <span id={`${id}Label`} className="xpFormsVisuallyHidden">{label}</span>
        <div className={`${id}Toolbar`}>
          {numberOfSelectedForms > 0 ? [
            <span className={`${id}Toolbar__counter`}>{numberOfSelectedForms}</span>,
            <span> forms </span>,
            ] : null
          }
        </div>
        <ul
          role="listbox"
          tabIndex="0"
          id={id}
          className={id}
          aria-labelledby={`${id}Label`}
          aria-multiselectable={multiSelectable}
          aria-activedescendant={getId(this.state.activeDescendant)}
          onFocus={() => this.focusHandler()}
          onKeyUp={event => this.optionKeyHandler(event, list[this.state.currentIndex].id)}
        >
          {list.map(option => (
            <li
              role="option"
              aria-selected={this.state.selectedOptions[option.id] === true}
              id={getId(id, option.id)}
              key={getId(id, option.id)}
              className={`${id}Option${this.state.selectedOptions[option.id] === true ? ` ${id}Option--checked` : ''}${this.state.activeDescendant === option.id ? ` ${id}Option--focused` : ''}`}
              onClick={() => {}}
              onKeyUp={() => {}} // hack to remove es-lint error, as key handlers are placed on ul
            >
              <span className={`${id}OptionText`}>{option.displayName}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


FormsOverviewList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  multiSelectable: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selectHandler: PropTypes.func,
  unSelectHandler: PropTypes.func,
};

export default FormsOverviewList;
