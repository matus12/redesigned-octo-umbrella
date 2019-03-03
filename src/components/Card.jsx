import React from "react";
import { navigate } from "gatsby"

export class Card extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: 0,
            alpha: 0.1,
            cursor: "arrow"
        };
    }

    onMouseEnter = () => {
        this.setState(() => ({
            width: 0,
            alpha: 0.2,
            cursor: "pointer"
        }));
    }

    onMouseLeave = () => {
        this.setState(() => ({
            width: 0,
            alpha: 0.1,
            cursor: "arrow"
        }));
    }

    onClick = () => {
        navigate(
            "/movie/",
            {
                state: {
                    value: this.props.movie.original_title
                }
            }
        );
    }

    render() {
        return (
            <div
                key={this.props.index}
                style={{
                    backgroundColor: `rgba(${this.state.color},0,0,${this.state.alpha})`,
                    textAlign: "center",
                    boxShadow: "10px 4px 8px 0 rgba(0,0,0,0.5)",
                    maxWidth: "330px",
                    border: "1px",
                    margin: "15px 10px 15px 10px",
                    cursor: this.state.cursor
                }}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                onClick={this.onClick}
            >
                <h3
                    style={{
                        padding: "20px",
                        margin: "0px"
                    }}
                >
                    {this.props.movie.original_title}
                </h3>
                <img
                    src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}
                    alt="poster_image"
                    style={{
                        paddingBottom: "0px"
                    }}
                />
            </div>
        );
    }
}