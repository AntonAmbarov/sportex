import React from 'react';
import { useTranslation } from 'react-i18next';

export function useQueryStatus({ data, error, isLoading }, noDataMessage = 'Нет данных') {
    const { t } = useTranslation();
    if (isLoading) return (<div>{t('messages.isLoading')}</div>);
    if (error) return (<div>{t('messages.isLoading')}</div>);
    if (!data) return (<div>{noDataMessage}</div>);
    // if (!data || data.length === 0) return (<div>{noDataMessage}</div>);
    return null;
}