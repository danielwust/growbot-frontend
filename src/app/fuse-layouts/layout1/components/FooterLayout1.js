import { selectFooterTheme } from "app/store/fuse/settingsSlice";
import { useSelector } from "react-redux";
import React, { useState } from "react";

import ApiService from 'app/services/api/';

import ButtonPrimary from "app/fuse-layouts/shared-components/button-default/ButtonDefault";
import { ThemeProvider } from "@material-ui/core/styles";
import { ArrowUpwardSharp } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

function FooterLayout1(props) {
    const footerTheme = useSelector(selectFooterTheme);
		const [ loading, setLoading] = useState(false);
		let command = "";

    async function sendCommand() {
			if (command) {
				await ApiService.doPost('/command', { command })
					.then(res => console.log(res.message ?? 'Command sent'))
					.catch(err => console.error(err.message ?? 'Error sending command'));
				} else {
					console.log('Please insert command');
				}
			setLoading(false);
		}

	function handleClick() {
			command = document.getElementById("command").value;
			setLoading(true);

			setTimeout(() => {
				sendCommand();
			}, 1000);
		}

    return (
			<ThemeProvider theme={footerTheme}>
				<AppBar	id="fuse-footer" className="relative z-10 shadow-md" color="default"
					style={{ backgroundColor: footerTheme.palette.background.paper, cursor: "pointer" }}>
					<Typography className="mx-10 my-8 flex items-center justify-between">
							<input id="command" type="text" name="command" placeholder="Type your command here... or not, it's up to you."
								className="focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 
								border border-gray-300 rounded-md shadow-sm disabled:bg-gray-100 mt-1 w-full px-10 py-6" />
							<ButtonPrimary title="Send" type="button" action={handleClick} loading={loading}
							placeholder={<ArrowUpwardSharp className="mx-6"/>} ariaLabel="send" />
					</Typography>
				</AppBar>
			</ThemeProvider>
    );
}

export default React.memo(FooterLayout1);
