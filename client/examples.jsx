import React, {useEffect, useState} from 'react';

    export function ListExamples() {
        const [examples, setExamples] = useState([]);
    
        async function loadExamples() {
            const res = await fetch("/api/examples");
            setExamples(await res.json());
        }

        useEffect(() => {
            loadExamples();
        }, []);
    
        return (
            <>
                <h1>Examples</h1>
                {examples.map((m) => (
                    <div>{m.example}</div>
                ))}
            </>
        );
    }

export function AddExampleForm() {
  const [example, setExample] = useState("");
    
  async function saveExample(e) {
    e.preventDefault();
    await fetch("/api/examples", {
        method: "POST",
        body: JSON.stringify({ example }),
        headers: {
            "Content-Type": "application/json",
        },
    });
  }

    return (
    <form onSubmit={saveExample}>
      <h1>Add Example</h1>
      <div>
        Example:
        <br />
            <input value={example} onChange={(e) => setExample(e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}