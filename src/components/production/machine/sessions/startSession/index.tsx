export default function StartSession({
  chooseTeam,
  setChooseTeam,
  itemSelected,
  setItemSelected,
}: any) {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      <div className="w-full">
        <select
          value={chooseTeam}
          onChange={(e) => setChooseTeam(e.target.value)}
          className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
        >
          <option value="">Selecione uma equipe</option>
          <option value="Equipe I">Equipe I</option>
          <option value="Equipe II">Equipe II</option>
          <option value="Equipe III">Equipe III</option>
          <option value="Equipe IV">Equipe IV</option>
        </select>
      </div>
      <div className="w-full">
        <select
          className="h-7 w-full border-solid border-2 border-gray-400 rounded-md outline-none"
          value={itemSelected}
          onChange={(e) => {
            setItemSelected(e.target.value);
          }}
        >
          <option>Selecione um item</option>
          <option>I00345 - Areia média 20 kg</option>
          <option>I00345 - Areia média 15 kg</option>
          <option>I00345 - Areia média 30 kg</option>
          <option>I00345 - Areia média 20 kg Personalizada</option>
        </select>
      </div>
    </div>
  );
}
