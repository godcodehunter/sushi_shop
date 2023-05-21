import {ReactComponent as Plus} from "./assets/plus.svg";
import {ReactComponent as Minus} from "./assets/minus.svg";
import { useState } from "react";

interface CardProps {
    init: number,
    onChange: (value: number) => void,
    name: string,
    img: string,
    composition: string[],
    weight: number,
    price: number,
}


export const Card = ({ init, onChange, name, img, composition, weight, price }: CardProps) => {
    const [value, setValue] = useState(init);

    const isInBasket = value > 0

    return <div
        style={{
            padding: "10px",
            backgroundColor: "#17181C",
            borderColor: isInBasket ? "red" : undefined,
            display: "flex",
            flexDirection: "row",
        }}
    >
        <img style={{ height: "140px", width: "140px" }} src={img} />
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <div style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "20px", }}>{name}</div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "5px",
                }}
            >
                {composition.map((item, index) => {
                    return <div key={index} style={{
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        borderRadius: "4px",
                        paddingLeft: "4px",
                        paddingRight: "4px",
                    }}>{item}</div>
                })}
            </div>
            <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>{`weight ${weight}g`}</div>
            <div style={{ color: "rgba(255, 255, 255, 0.8)" }}>{`price ${price}฿`}</div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    gap: "10px",
                   
                    paddingRight: "20px",
                }}
            >
                <Minus
                    style={{
                        height: "30px",
                        width: "30px",
                    }}
                    onClick={() => {
                        if(value !== 0) {
                            setValue(value - 1)
                        }
                    }}
                />
                <Plus
                    style={{
                        height: "30px",
                        width: "30px",
                    }}
                    onClick={() => setValue(value + 1)}
                />
            </div>
            { isInBasket && <div style={{
                color: "rgba(255, 255, 255, 0.8)",
                alignSelf: "end",
                fontSize: "14px",
                paddingTop: "10px",
                paddingRight: "10px",
            }}>
                {`TOTAL ${value * price}฿ FOR ${value}`}
            </div>}
        </div>
    </div>
};