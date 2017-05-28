import React from "react";

export default ({data}) => (
    <table>
        <thead>
            
        </thead>
        <tbody>
            {data.map(card => (
                <tr key={card.get("id")}>
                    <td>{card.get("id")}</td>
                    <td>{card.get("title")}</td>
                    <td>{card.get("questionText")}</td>
                    <td>{card.get("answerText")}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
