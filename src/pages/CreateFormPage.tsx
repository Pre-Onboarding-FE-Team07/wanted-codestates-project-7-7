interface data {
  name: string;
  id: number;
}

function CreateFormPage({ name, id }: data) {
  console.log(name, id);
  return (
    <div>
      CreateFormPage{name}
      {id}
    </div>
  );
}

export default CreateFormPage;
