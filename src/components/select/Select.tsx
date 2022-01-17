import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

interface Value {
	value: string;
}

interface IProps {
	items: Value[];
	label: string;
	handleChange?: (e: SelectChangeEvent) => void;
	currentItem?: string;
}

export const Selector = ({items, handleChange, label, currentItem}: IProps) => {

	return (
		<FormControl sx={{m: 1, minWidth: 140}}>
			<InputLabel id="selector">{label}</InputLabel>
			<Select
				labelId="selector"
				id="selector"
				value={currentItem}
				onChange={handleChange}
				autoWidth
				label={label}
			>
				{
					items.map(item => {
						return (
							<MenuItem
								value={item.value}
								key={item.value}>
								{item.value}
							</MenuItem>
					)
					})
				}
			</Select>
		</FormControl>
	);
};
