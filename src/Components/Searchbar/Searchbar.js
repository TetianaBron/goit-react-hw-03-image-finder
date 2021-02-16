import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';


export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error("Введите что-то.");
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

              <input
                 className={s.SearchFormInput}
                 type="text"
                 name="query"
                 value={this.state.query}
                 onChange={this.handleQueryChange}
                 autoComplete="off"
                 autoFocus
                 placeholder="Search pictures from Pixabay..."
              />
           </form>
      </header>
    );
  }
}
