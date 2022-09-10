("use strict");

import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { ReactSketchCanvas } from "react-sketch-canvas";

class DrawingBoard extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  strokewtf = (e) => {
    this.setState({ strokeWidth: e.target.value });
  };

  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "100px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });

    return (
      <div>
        {/* 3 column grid */}
        <div className="grid grid-cols-3">
          <div
            className="btn text-black"
            style={styles.swatch}
            onClick={this.handleClick}
          >
            select color
            <div style={styles.color} />
          </div>
          <div className="btn btn-outline btn-ghost rounded-none hover:bg-transparent ">
            <span className="text-black">Stroke width:</span>
            <input
              // console log every time the number is changed
              onChange={(e) => this.strokewtf(e)}
              type="range"
              min="0"
              max="100"
              className="range max-w-xs"
              id="strokeInput"
              // initial value
              defaultValue="1"
            />
          </div>
          <div className="rounded-none hover:bg-transparent">
            <div className="btn-group items-center justify-center">
              <button
                onClick={() => this.canvas.current.undo()}
                className="btn btn-outline btn-ghost rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
              </button>
              <button
                onClick={() => this.canvas.current.redo()}
                className="btn btn-outline btn-ghost rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                  />
                </svg>
              </button>
              <button
                onClick={() => this.canvas.current.clearCanvas()}
                className="btn btn-outline btn-ghost rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
              <button
                onClick={() => this.canvas.current.resetCanvas()}
                className="btn btn-outline btn-ghost rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  this.canvas.current.exportImage("png").then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = "image.png";
                    link.href = dataUrl;
                    link.click();
                  })
                }
                className="btn btn-outline btn-ghost rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="border border-base-300">
            {this.state.displayColorPicker ? (
              <div style={styles.popover}>
                <div onClick={this.handleClose} />

                <SketchPicker
                  color={this.state.color}
                  onChange={this.handleChange}
                />
              </div>
            ) : null}

            <div>
              {" "}
              <ReactSketchCanvas
                style={styles}
                ref={this.canvas}
                height={5}
                strokeWidth={this.state.strokeWidth}
                strokeColor={
                  "rgba(" +
                  this.state.color.r +
                  "," +
                  this.state.color.g +
                  "," +
                  this.state.color.b +
                  "," +
                  this.state.color.a +
                  ")"
                }
                className="min-h-screen border border-black"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DrawingBoard;
