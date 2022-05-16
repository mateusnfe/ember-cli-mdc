import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class IndexController extends Controller {
  @tracked
  open;

  @action
  openMenu () {
    this.open = true;
  }

  @action
  alert () {
    alert ('Menu item clicked.');
  }
}
