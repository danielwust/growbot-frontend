import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import React from 'react';

import FusePageSimple from '@fuse/core/FusePageSimple';
import ChatContent from '@fuse/core/ChatContent';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function Home(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('home');

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			// header={}
			contentToolbar={
				<div className="px-24">
					<h4>Bem vindo ao portal do BOT da Growdev</h4>
				</div>
			}
			content={
				<div className="p-24">
					<ChatContent />
				</div>
			}
		/>
	);
}

export default Home;
