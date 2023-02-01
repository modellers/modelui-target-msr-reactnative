//// /////////////////////////////
///  Layout wrappers
/// //////////////////////////////

import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
/*
// icons
import { EvaIconsPack } from '@ui-kitten/eva-icons';
*/
//// /////////////////////////////
///  Importing MUI
/// //////////////////////////////

/*
// Styles
import { withStyles as _withStyles, makeStyles as _makeStyles } from '@mui/styles';
import { createTheme as _createTheme, ThemeProvider as _ThemeProvider } from '@mui/material/styles';
import _CssBaseline from '@mui/material/CssBaseline';
// Avatar
import _Avatar from '@mui/material/Avatar';
import _AvatarGroup from '@mui/lab/AvatarGroup';
import _Tooltip from '@mui/material/Tooltip';
*/
// Buttons
import { Button as _Button } from '@ui-kitten/components';
import { ButtonGroup as _ButtonGroup } from '@ui-kitten/components';
import { Icon as _Icon } from '@ui-kitten/components';

// Card
import { Card as _Card } from '@ui-kitten/components';
/*
// Accordion
import _Accordion from '@mui/material/Accordion';
import _AccordionSummary from '@mui/material/AccordionSummary';
import _AccordionDetails from '@mui/material/AccordionDetails';
import _Typography from '@mui/material/Typography';
// Grid
import _Grid from '@mui/material/Grid';
*/
// Tabs
import { View as _View } from '@ui-kitten/components';
import { Layout as _Layout } from '@ui-kitten/components';
import { Tab as _Tab } from '@ui-kitten/components';
import { TabView as _TabView } from '@ui-kitten/components';

// Image
import { Image as _Image } from 'react-native';
// Checkbox
import { CheckBox as _Checkbox } from '@ui-kitten/components';
import { Toggle as _Toggle } from '@ui-kitten/components';
// Text 
import { Text as _Text } from '@ui-kitten/components';
import { Input as _TextField } from '@ui-kitten/components';
import { Autocomplete as _Autocomplete, AutocompleteItem as _AutocompleteItem } from '@ui-kitten/components'
// List
import { List as _List } from '@ui-kitten/components';
import { ListItem as _ListItem } from '@ui-kitten/components';
/*
// Table
import { DataGrid as _DataGrid } from '@mui/x-data-grid';
import _Table from '@mui/material/Table';
import _TableBody from '@mui/material/TableBody';
import _TableCell from '@mui/material/TableCell';
import _TableContainer from '@mui/material/TableContainer';
import _TableHead from '@mui/material/TableHead';
import _TableRow from '@mui/material/TableRow';
// Tree
import _TreeView from '@mui/lab/TreeView';
import _TreeItem from '@mui/lab/TreeItem';
// Snackbar
import _Snackbar from '@mui/material/Snackbar';
import _MuiAlert from '@mui/lab/Alert';
// Dialog
import _Dialog from '@mui/material/Dialog';
import _DialogTitle from '@mui/material/DialogTitle';
import _DialogActions from '@mui/material/DialogActions';
import _DialogContent from '@mui/material/DialogContent';
import _DialogContentText from '@mui/material/DialogContentText';
import _MuiDialogTitle from '@mui/material/DialogTitle';

//// /////////////////////////////
///  Exports
/// //////////////////////////////
*/
export const ApplicationWrapper = (props) => {
    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            {props.children}
        </ApplicationProvider>
    )
}
/*
// Styles
export const withStyles = _withStyles
export const makeStyles = _makeStyles
export const createTheme = _createTheme
export const ThemeProvider = _ThemeProvider
export const CssBaseline = _CssBaseline
// Avatar
export const Avatar = _Avatar
export const AvatarGroup = _AvatarGroup
export const Tooltip = _Tooltip
*/
// Button
export const Button = _Button
export const ButtonGroup = _ButtonGroup
export const Icon = _Icon

// Card
export const Card = _Card
/*
// Accordion
export const Accordion = _Accordion
export const AccordionSummary = _AccordionSummary
export const AccordionDetails = _AccordionDetails
export const Typography = _Typography
// Grid
export const Grid = _Grid;
*/
// Tabs
export const View = _View;
export const Layout = _Layout;
export const Tab = _Tab;
export const TabView = _TabView;
// Image
export const Image = _Image
// Checkbox
export const Checkbox = _Checkbox
export const Toggle = _Toggle
// Text
export const Text = _Text
export const TextField = _TextField
export const Autocomplete = _Autocomplete
export const AutocompleteItem = _AutocompleteItem
// List
export const List = _List
export const ListItem = _ListItem
/*
// Table
export const DataGrid = _DataGrid
export const Table = _Table
export const TableBody = _TableBody
export const TableCell = _TableCell
export const TableContainer = _TableContainer
export const TableHead = _TableHead
export const TableRow = _TableRow
// Tree
export const TreeView = _TreeView
export const TreeItem = _TreeItem
// Snackbar
export const Snackbar = _Snackbar
export const MuiAlert = _MuiAlert
// Dialog
export const Dialog = _Dialog
export const DialogTitle = _DialogTitle
export const DialogActions = _DialogActions
export const DialogContent = _DialogContent
export const DialogContentText = _DialogContentText
export const MuiDialogTitle = _MuiDialogTitle
*/