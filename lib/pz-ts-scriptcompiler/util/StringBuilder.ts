export class StringBuilder {
    private strings: string[] = [];
    private indentLevel: number = 0;
    private indentString: string = '    ';

    constructor(indent: boolean) {
        if (!indent) this.indentString = '';
    }

    public indent() {
        this.indentLevel++;
    }

    public unindent() {
        this.indentLevel--;
    }

    public append(str: string): void {
        this.strings.push(this.getCurrentIndent() + str);
    }

    public appendLine(str: string): void {
        this.strings.push(this.getCurrentIndent() + str + '\n');
    }

    /** The same as {@link append}, but includes a comma after. */
    public appendProperty(str: string): void {
        this.strings.push(this.getCurrentIndent() + str + ',');
    }

    /** The same as {@link appendLine}, but includes a comma after. */
    public appendLineProperty(str: string): void {
        this.strings.push(this.getCurrentIndent() + str + ',' + '\n');
    }

    public newLine(): void {
        this.strings.push('\n');
    }

    public openBracket() {
        this.appendLine('{');
        this.indent();
    }

    public closeBracket() {
        this.unindent();
        this.appendLine('}');
    }

    public toString(): string {
        return this.strings.join('');
    }

    public out(): string {
        return this.toString();
    }

    public clear(): void {
        this.strings = [];
    }

    private getCurrentIndent(): string {
        return this.indentString.repeat(this.indentLevel);
    }
}
