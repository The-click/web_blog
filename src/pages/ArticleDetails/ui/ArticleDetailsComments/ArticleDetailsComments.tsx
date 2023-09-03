import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/AddCommentForm";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { VStack } from "shared/ui/Stack";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { addCommentForArticle } from "../../model/service/addCommentForArticle/addCommentForArticle";
import { fetchCommentArticleById } from "../../model/service/fetchCommentArticleById";
import { getArticleComments } from "../../model/slice/articleDetailsCommentSlice";

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();
        const dispatch = useDispatch();

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

        useInitialEffect(() => {
            dispatch(fetchCommentArticleById(id));
        });

        const onSendComment = useCallback(
            (text) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch]
        );

        return (
            <VStack gap="16" max className={classNames("", {}, [className])}>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </VStack>
        );
    }
);
