import { useState } from "react";

interface HeaderProps {
    style?: any,
    init: string,
    categories: string[],
    onChange: (value: string) => void,
}

interface ButtonProps {
    isActive?: boolean,
    itemsInBasket?: number,
    onClick?: ()=>void,
    children?: any,
}

const Button = ({isActive, children, onClick, itemsInBasket}: ButtonProps) => {
    const handleClick = () => {
        if(onClick !== undefined) {
            onClick()
        }
    }

    return (
        <div style={{
                paddingTop: "14px", 
                position: "relative",
            }}
        >
            <div style={{
                    position: "absolute", 
                    top: "0px", 
                    right: "0px", 
                    marginRight: "4px",
                    
                    width: "16px", 
                    height: "16px", 
                    backgroundColor: "green",
                    borderRadius: "4px",

                    textAlign: "center",
                    color: "white",
                }}
            >{itemsInBasket}</div>
            <div
            style={{
                color: isActive ? "#17181C" : "rgba(255, 255, 255, 0.4)",

                paddingLeft: "6px",
                paddingRight: "6px",
                paddingTop: "4px",
                paddingBottom: "4px",

                borderRadius: "6px",

                backgroundColor: isActive ? "#AAADB2" : undefined,
                outline: isActive ? undefined : "1px solid rgba(255, 255, 255, 0.4)"
            }} 
            onClick={handleClick}
            >
                {children}
            </div>
        </div>
    )
}

export const Header = ({ style, init, categories, onChange = () => { } }: HeaderProps) => {
    const [selected, setSelected] = useState(init)

    return (
        <div style={{
            backgroundColor: "#17181C",

            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            borderBottomColor: "#5f6368",

            display: "flex",
            flexDirection: "row",
            overflowY: "hidden",
            alignItems: "center",
            justifyContent: "center",

            padding: "12px",
            gap: "12px",
            ...style
        }}>
            {categories.map((item, index) => {
                return (
                    <Button 
                        key={index}
                        isActive = {item === selected}
                        itemsInBasket = {3}
                        onClick={() => {
                            onChange(categories[index])
                            setSelected(item)
                        }}
                    >
                        {item}
                    </Button>
                )
            })}
        </div>
    );
};


