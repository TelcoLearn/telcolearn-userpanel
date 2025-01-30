"use client";

import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
import {
  decrement,
  increment,
  reset,
  setStatus,
} from "../redux/features/counterSlice";

function Test() {
  const { count, status } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Count: {count} </h2>
      <h2>Status: {status}</h2>

      <div className="border-red-400  border-4 m-4 p-4">
        <button
          className="border p-2 m-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border p-2 m-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button className="border p-2 m-2" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
      <div className="border-blue-500  border-4 m-4 p-4">
        <button
          className="border p-2 m-2"
          onClick={() => dispatch(setStatus("active"))}
        >
          Set Status to Active
        </button>
        <button
          className="border p-2 m-2"
          onClick={() => dispatch(setStatus("inactive"))}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Test;
