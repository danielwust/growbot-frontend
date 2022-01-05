import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

export default function ButtonPrimary({ title, disabled, type, ariaLabel, fullWidth, action, loading }) {
	return (
		<Button
			type={type}
			variant="contained"
			color="secondary"
			className="ml-3 px-10 py-6"
			aria-label={ariaLabel}
			fullWidth={fullWidth}
			disabled={disabled || loading}
			value="legacy"
			onClick={action}
		>
			{loading ? <CircularProgress color="inherit" /> : title}
		</Button>
	);
}
