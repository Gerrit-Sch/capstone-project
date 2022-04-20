import styled from "styled-components";
import DeleteMessageButton from "./DeleteMessageButton";
import { GrCheckmark, GrClose } from "react-icons/gr";

export default function DeleteMessage({ onConfirmDelete, onCancelDelete }) {
  return (
    <MessageOverlay>
      <MessageContent>
        <p>Do you really want to delete this listing?</p>
        <MessageWindowWrapper>
          <DeleteMessageButton
            variant={"confirm"}
            type="button"
            onClick={onConfirmDelete}
          >
            <GrCheckmark />
          </DeleteMessageButton>
          <DeleteMessageButton
            variant={"cancel"}
            type="button"
            onClick={onCancelDelete}
          >
            <GrClose />
          </DeleteMessageButton>
        </MessageWindowWrapper>
      </MessageContent>
    </MessageOverlay>
  );
}

const MessageOverlay = styled.div`
  position: fixed;
  background-color: rgba(49, 49, 49, 0.3);
  inset: 0;
  z-index: 1;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
  padding: 5px;
  width: 50%;
  margin: 30vh auto;
  background-color: white;
  border-radius: 8px;
  p {
    font-size: 0.9rem;
    color: black;
    text-align: center;
  }
`;

const MessageWindowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
