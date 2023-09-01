import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { HStack } from "shared/ui/Stack";
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slice/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}
const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback(
        (value) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch]
    );
    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onSendComment, onCommentTextChange, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                max
                gap="8"
                justify="between"
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    placeholder={t("Enter your comment")}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                />
                <Button onClick={onSendHandler}>{t("Send")}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
