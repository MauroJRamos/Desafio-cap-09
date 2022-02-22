import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/requests';

import './styles.css';

export type MovieFilterData = {
  name: string;
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectCategories, setSelectCategories] = useState<Genre[]>([]);

  const { register, handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('name', '');
    setValue('genre', null);
  };

  const handleChangeCategory = (value: Genre) => {
    setValue('genre', value);

    const obj: MovieFilterData = {
      name: getValues('name'),
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/genres' }).then((response) => {
      setSelectCategories(response.data.content);
    });
  }, []);

  return (
    <div className="base-card Movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="Movie-filter-form">
        <div className="Movie-filter-name-container">
          <input
            {...register('name')}
            type="text"
            className="form-control"
            placeholder="Genero"
            name="name"
          />
          <button className="Movie-filter-search-icon">
            <SearchIcon />
          </button>
        </div>
        <div className="Movie-filter-bottom-container">
          <div className="Movie-filter-category-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectCategories}
                  isClearable
                  placeholder="Genero"
                  classNamePrefix="Movie-filter-select"
                  onChange={(value) => handleChangeCategory(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
          </div>
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary btn-Movie-filter-clear"
          >
            LIMPAR<span className="btn-Movie-filter-word"> FILTRO</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
