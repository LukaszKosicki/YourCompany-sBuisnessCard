import React from "react";
import { CompanyName } from "../../dataPerPage";

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.drawTop();
        this.drawBottom();
    }

    drawTop = () => {
        var canvas = document.getElementById("top");
  
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.lineWidth = "10";
            canvas.style.height = "50px";
            canvas.style.width = "100%";

            this.drawLine(0, canvas.height, ctx, "top");
            this.drawLine(canvas.width / 2, 0, ctx, "bottom");
        }
    }

    drawBottom = () => {
        var canvas = document.getElementById("bottom");

        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            ctx.lineWidth = "10";
            canvas.style.height = "50px";
            canvas.style.width = "100%";

            this.drawLine(0, canvas.height / 2, ctx, "line");
        }
    }

    drawLine = (startX, startY, ctx, k) => {
        setInterval(() => {
            var x = startX++;
            if (k === "top") {
                var y = startY--;
            } else if (k === "line") {
                var y = startY;
            } else {
                var y = startY++;
            }
            this.drawPoint(x, y, ctx);
        }, 7)
    }

    drawPoint = (x, y, ctx) => {
        ctx.moveTo(x, y);
        ctx.lineTo(x + 1, y + 1);
        ctx.stroke();
    }

    render() {
        var mainDiv = {
            display: "inline-block",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffc107ad"
        };
        var text = {
            textAlign: "center",
            paddingLeft: "30px",
            paddingRight: "30px"
        };
       
        return (
            <div style={mainDiv}>
                <canvas id="top"></canvas>
                <h1 style={text}>{CompanyName}</h1>
                <canvas id="bottom"></canvas>
            </div>
            );
    }
}