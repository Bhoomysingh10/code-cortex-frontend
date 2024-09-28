import React, { useRef, useState } from 'react';
import { Button, Modal, Switch } from 'antd';
import Draggable from 'react-draggable';

const DragModal = () => {
  const [open, setOpen] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const draggleRef = useRef(null);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  return (
    <>
      <Modal
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            Settings
          </div>
        }
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <div className='flex flex-col'>
            <div className='flex justify-between font-bold text-[18px] items-center'>
                <p>Video Permission: </p>
                <Switch defaultChecked onChange={onChange} />
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between font-bold text-[18px] items-center'>
                <p>Audio Permission: </p>
                <Switch defaultChecked onChange={onChange} />
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between font-bold text-[18px] items-center'>
                <p>Keyboard Permission: </p>
                <div className='flex items-center justify-center'>
                    <input type="number" defaultValue={0} className='w-[4rem]'/>
                    <p className='ml-[1rem]'>wpm</p>
                </div>
            </div>
        </div>

      </Modal>
    </>
  );
};
export default DragModal;