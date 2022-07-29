import React from "react";
// translation
import { withTranslation } from 'react-i18next';

const CustomerHome = (props) => {
	const { t } = props;

// changing language from dropdown
// https://www.tabnine.com/code/javascript/functions/react-i18next/i18n/changeLanguage
// remove the link after implementation it is for testing purpose

  return <div> { t('common:common.update') } CustomerHome</div>;
};

export default withTranslation() (CustomerHome);
