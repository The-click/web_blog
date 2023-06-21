import { Suspense, useContext, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import { AppRouter } from "./providers/router";

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const toggleIsOpen = () => {
        setIsOpen(false);
    };

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
