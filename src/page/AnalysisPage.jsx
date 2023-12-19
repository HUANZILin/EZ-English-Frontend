import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import Container from "../components/UI/Container";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const TopicSection = styled.section`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0px;
`;

const AmountSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  margin-bottom: 60px;
`;

const SmallDiagram = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 20px;
  background-color: #e2e4dd;
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 20px;
`;

const BigDiagram = styled.div`
  width: 80%;
  height: 400px;
  border-radius: 20px;
  background-color: #e2e4dd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;
  height: 300px;
`;

const AnalysisPage = () => {
  const [diagramData, setDiagramData] = useState([]);

  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);
  const chart4Ref = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jybluega.com/ez-backend/analysis", {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtX2lkIjoiNCIsIm1fYWNjb3VudCI6InRlc3QifQ.1TMkD1UIvZDPAdv64e8wLYp4F7rkBYgrYre9yQ8s33A",
        },
      });

      const data = await response.json();

      setDiagramData(data.data);
      console.log(data.data.modeWeek[1]["count(*)"]);
    }
    try {
      fetchData();
    } catch (error) {
      console.log("The error occuered! :", error.message);
    }
  }, []);

  useEffect(() => {
    const chart1 = chart1Ref.current;
    const chart2 = chart2Ref.current;
    const chart3 = chart3Ref.current;
    const chart4 = chart4Ref.current;

    if (chart1) {
      console.log("ChartJS", chart1);
      //   chart1.destroy();
    }
    if (chart2) {
      console.log("ChartJS", chart2);
      //   chart2.destroy();
    }
    if (chart3) {
      console.log("ChartJS", chart3);
      //   chart3.destroy();
    }
    if (chart4) {
      console.log("ChartJS", chart4);
      //   chart4.destroy();
    }
  }, []);

  const options1 = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
            family: "微軟正黑體",
          },
          color: "#314543",
        },
      },
    },
  };

  const data1 = {
    labels: ["隨機", "收藏"],
    datasets: [
      {
        label: "點閱數",
        data: [
          diagramData.modeWeek[1]["count(*)"],
          diagramData.modeWeek[0]["count(*)"],
        ],
        borderWidth: "0",
        backgroundColor: ["#314543", "#58805e"],
        hoverOffset: 4,
      },
    ],
  };

  const options2 = {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 16,
            family: "微軟正黑體",
          },
          color: "#314543",
        },
      },
    },
  };

  const data2 = {
    labels: ["隨機", "收藏"],
    datasets: [
      {
        label: "點閱數",
        data: [
          diagramData.modeMonth[1]["count(*)"],
          diagramData.modeMonth[0]["count(*)"],
        ],
        borderWidth: "0",
        backgroundColor: ["#314543", "#58805e"],
        hoverOffset: 4,
      },
    ],
  };

  const options3 = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
            family: "微軟正黑體",
          },
          color: "#314543",
        },
      },
    },
  };

  const data3 = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "單字量",
        data: [65, 54, 41, 39, 27, 47, 53],
        fill: false,
        borderColor: "#314543",
        pointBackgroundColor: "#314543",
        tension: 0.1,
      },
    ],
  };

  const options4 = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16,
            family: "微軟正黑體",
          },
          color: "#314543",
        },
      },
    },
  };

  const data4 = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "正確率",
        data: [5, 3, 4, 3, 1, 2, 4],
        fill: false,
        borderColor: "#314543",
        pointBackgroundColor: "#314543",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container>
      <h1
        style={{
          paddingTop: "100px",
          textAlign: "center",
          letterSpacing: "2rem",
        }}
      >
        &thinsp;學習分析
      </h1>
      <hr width="80%" />
      <ChartContainer>
        <TopicSection>
          <div>
            <h2>本週模式偏好</h2>
            <SmallDiagram>
              <Doughnut ref={chart1Ref} options={options1} data={data1} />
            </SmallDiagram>
          </div>
          <div>
            <h2>本月模式偏好</h2>
            <SmallDiagram>
              <Doughnut ref={chart2Ref} options={options2} data={data2} />
            </SmallDiagram>
          </div>
        </TopicSection>
        <AmountSection>
          <div>
            <h2>每週學習量(不分模式)</h2>
            <BigDiagram>
              <Line ref={chart3Ref} options={options3} data={data3} />
            </BigDiagram>
          </div>
          <div>
            <h2>每週正確率(不分模式)</h2>
            <BigDiagram>
              <Line ref={chart4Ref} options={options4} data={data4} />
            </BigDiagram>
          </div>
        </AmountSection>
      </ChartContainer>
    </Container>
  );
};

export default AnalysisPage;
