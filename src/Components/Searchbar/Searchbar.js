import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';


export default class PokemonForm extends Component {
  state = {
    query: '',
  };

  // handleNameChange = event => {
  //   this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  // };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Введите что-то.');
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
                 autoComplete="off"
                 autoFocus
                 placeholder="Search images and photos"
              />
           </form>
      </header>
    );
  }
}
