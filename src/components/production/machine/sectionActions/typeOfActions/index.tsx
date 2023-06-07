import Non_StopShift from "./non-stopShift";
import ShiftWithStop from "./shiftWithStop";

export default function TypeOfActions({Stop, finish}:any) {
  return (
    <>
      {Stop ? (
        < ShiftWithStop finish={finish}/>
      ) : (
        <Non_StopShift finish={finish} />
      )}
    </>
  );
}
