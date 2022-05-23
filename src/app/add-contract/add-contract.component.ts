import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CContract, constraintNames, triggerType } from '../_models/contract';
import { interimTriggerName } from '../_models/interimtriggerNames';
import { triggerName } from "../_models/triggerNames";

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

  debug: boolean = true;

  contractForm: FormGroup;
  disabled: boolean = true;

  public triggerNames: string[];
  public triggerTypes: string[];
  public constraintNames: string[];
  public interimTriggerNames: string[];

  constructor(private fb: FormBuilder) {
    this.constraintNames = constraintNames;
    this.triggerTypes = triggerType;
    this.triggerNames = triggerName;
    this.interimTriggerNames = interimTriggerName;
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() { return this.contractForm.controls; }

  createForm() {
    this.contractForm = this.fb.group({
      name: new FormControl(null, Validators.required),

      trigger: new FormControl(null, Validators.required),
      isinterimtrigger: new FormControl(false),
      interimtrigger: new FormControl(null, Validators.required),

      triggerDateKnown: new FormControl(null),

      purma: new FormControl(false),
      nntm: new FormControl(false),
      pdbtm: new FormControl(false),
      dsart: new FormControl(false),

      constraint: new FormControl(null, Validators.required),

      lbmanEffectivedeadlineinfo: new FormControl(null, Validators.required),
      lbmanProcbasisref: new FormControl(null, Validators.required),

      description: new FormControl(null),
    });
  }

  saveContract(form){
    if (this.contractForm.invalid) {
      return;
    }

    const triggerName = this.triggerNames.indexOf(form.value.trigger)
    const constraintName = this.constraintNames.indexOf(form.value.constraint)
    let interimtriggerName: number | null;

    if(form.isinterimtrigger){
      interimtriggerName = this.interimTriggerNames.indexOf(form.value.interimtrigger)
    } else {
      interimtriggerName = null;
    }

    const newContract: CContract = {
      name: form.value.name,

      trigger: triggerName,
      constraint: constraintName,

      interimtrigger: interimtriggerName,
      isinterimtrigger: form.value.isinterimtrigger,

      //same as trigger, constraint...
      lbmanEffectivedeadlineinfo: 1,
      lbmanProcbasisref: 2,
      //

      purma: form.value.purma,
      nntm: form.value.nntm,
      pdbtm: form.value.pdbtm,
      dsart: form.value.dsart,

      description: form.value.description
    }
    alert(`New Contract Saved:${JSON.stringify(newContract, null, 2)}`);
  }

}
