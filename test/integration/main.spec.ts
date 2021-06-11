import { runCLI } from '../helpers';

describe('my-command', () => {
  it('should display the help contents', () => {
    const { stdout } = runCLI(process.cwd(), ['--help']);

    expect(stdout).toContain('Usage: my-command [options]');
  });
});
