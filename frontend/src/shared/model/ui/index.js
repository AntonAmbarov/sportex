export {
    selectLoginForm,
    selectReatingOffcanvas,
    selectRegisterForm,
    selectStatusAuth,
} from './selectors';

export {
    default as uiReducer,
    openLoginForm,
    openRegisterForm,
    closeLoginForm,
    closeRegisterForm,
    toggleStatusAuth,
    openReatingOffcanvas,
    closeReatingOffcanvas
} from './slice';