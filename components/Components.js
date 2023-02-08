
// Managers and factories
import { layout } from 'modelui-core-runtime';

// Components
import { registerText } from './Text/Text';
import { registerTabs, registerGridRow, registerGridColumn, registerContainer } from './Grid/Grid';
import { registerImage } from './Image/Image';
import { registerButton } from './Button/Button';
import { registerList, registerDropdown } from './List/List';
import { registerCheckbox, registerTextfield } from './Input/Input';
import { registerCard } from './Card/Card';
import { registerTabMenu } from './Menu/Menu';

export default function registerComponents(component_manager) {

    if (!component_manager) {
        component_manager = layout.Manager.ComponentManager.getInstance();
    }
    /*
    if (component_manager.constructor.name !== 'ComponentManager') {
        throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
    }
    */

    // registerAvatar(component_manager);
    registerText(component_manager);
    registerImage(component_manager);
    registerTabs(component_manager);
    registerGridRow(component_manager);
    registerGridColumn(component_manager);
    registerContainer(component_manager);
    registerButton(component_manager);
    registerList(component_manager);
    registerDropdown(component_manager);
    registerCheckbox(component_manager);
    registerTextfield(component_manager);
    registerCard(component_manager);
    registerTabMenu(component_manager);

}