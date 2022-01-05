import { selectFooterTheme } from "app/store/fuse/settingsSlice";
import { useSelector } from "react-redux";
import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { ArrowUpwardSharp } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

function FooterLayout1(props) {
    const footerTheme = useSelector(selectFooterTheme);

    return (
			<ThemeProvider theme={footerTheme}>
				<AppBar
					id="fuse-footer" className="relative z-10 shadow-md" color="default"
					style={{
							backgroundColor: footerTheme.palette.background.paper,
					}}>
					<Typography className="mx-10 my-8 flex items-center justify-between">
							<input id="command" type="text" name="command" placeholder="Type your command here... or not, it's up to you."
								className="px-10 py-6 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 w-full" />
							<ArrowUpwardSharp></ArrowUpwardSharp>
					</Typography>
				</AppBar>
			</ThemeProvider>
    );
}

export default React.memo(FooterLayout1);
