import React from 'react';
import { Overlay } from '../../atoms/Overlay';
import { SecondaryButton } from '../../atoms/SecondaryButton';
import styles from './index.module.scss';

type Props = {
	content: {
		message: string;
	};
	closeDialog: () => void;
};
export const Dialog: React.VFC<Props> = ({ content, closeDialog }) => {
	return (
		<Overlay>
			<div id="dialog" className={styles.root}>
				<div className={styles.title}>Failure</div>
				<div className={styles.message}>
					<div>{content.message}</div>
				</div>
				<div className={styles.buttonWrapper}>
					<SecondaryButton
						text="Close"
						type="button"
						disabled={false}
						method={closeDialog}
					/>
				</div>
			</div>
		</Overlay>
	);
};
