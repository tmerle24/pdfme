import type { Template } from '@pdfme/common';
import { Designer } from '@pdfme/ui';

const domContainer = document.getElementById('container');
const template: Template = {
  //skip...　Check the Template section.
};

const designer = new Designer({ domContainer, template });
