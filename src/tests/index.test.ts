import { testCli } from './cli.test';
import { testConnectionStringParser } from './connection-string-parser.test';
import { testDiffChecker } from './diff-checker.test';
import { testE2E } from './e2e.test';
import { testSerializer } from './serializer.test';
import { testSymbolCollection } from './symbol-collection.test';
import { testTableMatcher } from './table-matcher.test';
import { testTransformer } from './transformer.test';

(async () => {
  testCli();
  testConnectionStringParser();
  testDiffChecker();
  testTableMatcher();
  testTransformer();
  testSerializer();
  testSymbolCollection();
  await testE2E();
})();
