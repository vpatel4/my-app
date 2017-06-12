import { Injectable } from '@angular/core'

@Injectable()
export class ChatService
{
    userLogin(): void {}

    userLogout(): void {}

    broadcastMessage(): void {}

    getMessages(): Promise<string>
    {
        return Promise.resolve("V: Blah Blah \n K: Blah Bluh \n klkml fkgmlm fkmklm fgkmlkm \n\n mkmsd sdfmkkmlsf sdkfmkm sdkml;m mksfmsdmk sdfms;df;sdl,");
    }
}
