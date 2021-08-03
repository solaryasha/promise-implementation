export interface Promise {
  then(): void 

  catch(): void;

  finally(): void;
 }


export enum PromiseStates {
  FullFilled = 'fullfilled',
  Rejected = 'rejected',
  Pending = 'pending'
}
