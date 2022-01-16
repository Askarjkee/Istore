import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import styled from "styled-components";
import {useAppSelector} from '../../redux/hooks';

const MyTextField = styled(TextField)`
	&& {
	  width: 555px;
	}
`


export const MuiAutocomplete = () => {
	const [value, setValue] = useState<FilmOptionType | null>(null);
	const filter = createFilterOptions<FilmOptionType>();

	// TODO

	interface FilmOptionType {
		inputValue?: string;
		title: string;
		year?: number;
	}

	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				if (typeof newValue === 'string') {
					setValue({
						title: newValue,
					});
				} else if (newValue && newValue.inputValue) {
					// Create a new value from the user input
					setValue({
						title: newValue.inputValue,
					});
				} else {
					setValue(newValue);
				}
			}}
			filterOptions={(options, params) => {
				const filtered = filter(options, params);

				const { inputValue } = params;
				// Suggest the creation of a new value
				const isExisting = options.some((option) => inputValue === option.title);
				if (inputValue !== '' && !isExisting) {
					filtered.push({
						inputValue,
						title: `Add "${inputValue}"`,
					});
				}

				return filtered;
			}}
			selectOnFocus
			clearOnBlur
			handleHomeEndKeys
			id="find-something"
			options={[{title: 'The Shawshank Redemption', year: 1994}]}
			getOptionLabel={(option) => {
				// Value selected with enter, right from the input
				if (typeof option === 'string') {
					return option;
				}
				// Add "xxx" option created dynamically
				if (option.inputValue) {
					return option.inputValue;
				}
				// Regular option
				return option.title;
			}}
			renderOption={(props, option) => <li {...props}>{option.title}</li>}
			sx={{ width: 300 }}
			freeSolo
			renderInput={(params) => (
				<MyTextField
					{...params}
					label="Поиск товара"
				/>
			)}
		/>
	);
};
