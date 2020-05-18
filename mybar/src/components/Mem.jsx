import { config, parseOutput } from "../config";
import { Colors } from "../enums";
import { styled, React } from "uebersicht";

export default class MEM extends React.Component {
  render() {
    let output = this.props.output;
    // === Parse Output === //
    let mem = Number(parseOutput(output, "mem"));

    let MemSVG = styled("svg")`
      width: 120px;
      height: 50%;
      padding-top: 7px;
      vertical-align: -5%;
    `;

        const MemDiv = styled("div")`
          position: relative;
          display: inline-block;
          font-family: "FiraCode-Retina", monospace;
          margin-top: 5px;
          padding-left: 10px;
          min-width: 120px;
          flex: 0;
        `;

        return (
          <MemDiv>
            mem:
            {`${mem}`}%
          </MemDiv>
        );

    // return (
    //   <MemSVG>
    //     <text x="0" y="15" fill="#9f7">
    //       mem:{" "}
    //     </text>
    //     <rect width="50" height="30" x="50" fill="#003300" />
    //     <rect width={`${mem}`} height="30" x="50" fill="green" />
    //   </MemSVG>
    // );
  }
}
