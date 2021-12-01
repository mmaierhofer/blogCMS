import React from "react";
import { useState } from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import WorkflowListitem from "./workflowListItem";

export default function DraggableList({ items, setItems, deleteWorkflow }) {
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const listItems = Array.from(items);
    const [reorderedItem] = listItems.splice(result.source.index, 1);
    listItems.splice(result.destination.index, 0, reorderedItem);

    setItems(listItems);
  }

  return (
    <div className="w-full mt-5">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="w-full"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map(({ color, name }, index) => {
                return (
                  <Draggable key={color} draggableId={color} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <WorkflowListitem
                          color={color}
                          name={name}
                          deleteWorkflow={(e) => deleteWorkflow(e)}
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
