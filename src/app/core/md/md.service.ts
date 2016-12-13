import { Injectable } from '@angular/core';
import { MdService } from 'ng2-smd-input/services/md.service';

@Injectable()
export class MarkdownService {

  constructor(private mdService: MdService) { }

  render(src: string, env?: any): string {
    return this.mdService.render(src, env).replace(/<a\s+href="/g, `<a luck href="`);
  }

}
