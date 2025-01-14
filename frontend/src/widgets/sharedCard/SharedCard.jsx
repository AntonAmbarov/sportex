import React from "react";
import { Card, CardBody, CardTitle, CardHeader } from "shared/ui/card";

export function SharedCard({ title, children }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardBody className="p-3">
                {children}
            </CardBody>
        </Card>
    )
}