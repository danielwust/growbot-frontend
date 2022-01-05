import ChatContent from '@fuse/core/ChatContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
					<h4>Content Toolbar</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<ChatContent />
				</div>
			}
		/>
	);
}

export default Home;
