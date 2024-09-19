import React from "react";

function useQueryStatus({ data, error, isLoading }, noDataMessage = 'Нет данных') {
    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!data || data.length === 0) return (<div>{noDataMessage}</div>);
    return null;
}

export default useQueryStatus;