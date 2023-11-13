import styled from "styled-components";
import Modal from "./Modal";

import { Input, List, Alert } from "antd";
let { Search } = Input;
import { useState } from "react";

Search = styled(Search)`
  padding-bottom: 10px;

  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper:focus-within,
  .ant-input-affix-wrapper:hover,
  .ant-btn-default:not(:disabled):not(.ant-btn-disabled):active {
    border-color: #314543;
  }

  .ant-input-affix-wrapper:focus-within {
    box-shadow: none;
  }

  .ant-btn-primary {
    background-color: #314543;
  }

  .ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    background-color: #58805e;
  }
`;

const GeneralButton = styled.button`
  cursor: pointer;
  border: none;
  color: #e2e4dd;
  background-color: #58805e;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
`;

const CreateButton = styled.button`
  cursor: pointer;
  border: none;
  color: #e2e4dd;
  background-color: #314543;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
`;

const StyledAlert = styled(Alert)`
  .ant-alert-message {
    color: #314543;
  }
`;

export const NewCardModal = ({ handleStopCreate, handleCreateCard }) => {
  const DUMMY_WORD = [
    {
      id: 1,
      title: "Apple",
      translation: "蘋果",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
    {
      id: 2,
      title: "Banana",
      translation: "香蕉",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
    {
      id: 3,
      title: "Orange",
      translation: "橘子",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
    {
      id: 4,
      title: "Pear",
      translation: "梨子",
      part: "noun.",
      explanation: "A kind of fruit.",
    },
  ];

  const [searched, setSearched] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState({});
  const [onCreate, setOnCreate] = useState(false);

  const onChange = (event) => {
    setSearchWord(event.target.value);
  };

  const onSearch = () => {
    setSearched(true);
    const results = DUMMY_WORD.filter((word) =>
      word.title.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFoundWords(results);
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word);
  };

  const handleStartCreate = () => {
    if (Object.keys(selectedWord).length !== 0) {
      setOnCreate(true);
      handleCreateCard([...DUMMY_WORD, selectedWord]);
    }
  };

  return (
    <Modal>
      <h2>新增單字卡</h2>
      <p>請搜尋單字列表中的單字，並新增至單字卡。</p>
      <Search
        placeholder="請輸入想搜尋的單字"
        allowClear
        enterButton="搜尋"
        onChange={onChange}
        onSearch={onSearch}
      />
      {searched && foundWords.length === 0 ? (
        <List />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={foundWords}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={
                  <label key={item.id}>
                    <input
                      type="radio"
                      name="objectRadio"
                      value={item.id}
                      checked={
                        selectedWord && selectedWord.title === item.title
                      }
                      onChange={() => handleWordSelect(item)}
                      disabled={onCreate}
                    />
                  </label>
                }
                title={
                  <p style={{ color: "#314543", fontWeight: "bold" }}>
                    {item.title} ({item.part})
                  </p>
                }
                description={item.explanation}
                style={{ alignItems: "center" }}
              />
            </List.Item>
          )}
        />
      )}
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <GeneralButton onClick={handleStopCreate}>取消</GeneralButton>
        <CreateButton onClick={handleStartCreate}>新增</CreateButton>
      </div>
      {onCreate && Object.keys(selectedWord).length !== 0 && (
        <StyledAlert message="新增成功" type="success" showIcon />
      )}
    </Modal>
  );
};
