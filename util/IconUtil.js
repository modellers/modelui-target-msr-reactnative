import React from 'react';
const LIB_FONT_AWESOME = "font-awesome"; // https://fontawesome.com/v4.7.0/icons/
const LIB_MATERIAL_UI = "material-ui"; // https://material-ui.com/components/material-icons/
/*
const LIB_UI_KITTEN = "ui-kitten"; // https://akveo.github.io/eva-icons/#/
import { Icon } from '@ui-kitten/components';
*/
export default function getIcon(icon_name, props) {
    /*
        Examples:
            'font-awesome:fa fa-spinner fa-sm fa-spin'

        Must first install icon library
    */
    return null;

    /*    if (!icon_name) return undefined;
        if (icon_name.indexOf(LIB_FONT_AWESOME) === 0) {
            icon_name = 'star'; // TODO: do a lookup from font-awesome to ui kitten
            return (<Icon {...props} name={icon_name} />)
        }
        else if (icon_name.indexOf(LIB_MATERIAL_UI) === 0) {
            icon_name = 'star'; // TODO: do a lookup from material-ui to ui kitten
            return (<Icon {...props} name={icon_name} />)
        }
        else if (icon_name.indexOf(LIB_UI_KITTEN) === 0) {
            return (<Icon {...props} name={icon_name.replace(LIB_UI_KITTEN, "").trim()} />)
        }
    */
}
