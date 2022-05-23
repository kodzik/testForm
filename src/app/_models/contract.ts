export interface IContract{
    id: number | null,
    name: string,
    modifyBy: string,
    modifyDate: Date,

    trigger: number, //trigger Name
    triggerdateLbman: boolean,
    triggerdateSvcscat: boolean,
    triggerdateItem: boolean,

    constraint: number,
    constraintLbman: boolean,
    constraintSvcscat: boolean,
    constraintItem: boolean,

    interimtrigger: number,
    isinterimtrigger: boolean,

    lbmanEffectivedeadlineinfo: number | null,
    lbmanProcbasisref: number | null,

    purma: boolean,
    nntm: boolean,
    pdbtm: boolean,
    dsart: boolean,

    description: string | null,
    editable: boolean
    status: string,
}

export class CContract {
  name: string

  trigger: number

  constraint: number

  interimtrigger: number
  isinterimtrigger: boolean = false;

  lbmanEffectivedeadlineinfo: number
  lbmanProcbasisref: number

  purma: boolean = false;
  nntm: boolean = false;
  pdbtm: boolean = false;
  dsart: boolean = false;

  description: string
}

export const triggerType = [
  "Lawful",
  "Service Category",
  "Item"
]

export const constraintNames = [
  "Planned Personal Data transfer to other processing entity",
  "Personal Data transfer to other processing entity",
  "Data Collection/Aquisition Instant"
]
