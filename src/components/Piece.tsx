export type Player = 'b' | 'w';
type Type = 'b' | 'k' | 'n' | 'p' | 'q' | 'r';
type Piece = `${Player}${Type}`;
type Pieces = Record<Piece, ReturnType<typeof require>>;

export const PIECES: Pieces = {
  bb: require('../assets/bb.png'),
  bk: require('../assets/bk.png'),
  bn: require('../assets/bn.png'),
  bp: require('../assets/bp.png'),
  bq: require('../assets/bq.png'),
  br: require('../assets/br.png'),
  wb: require('../assets/wb.png'),
  wk: require('../assets/wk.png'),
  wn: require('../assets/wn.png'),
  wp: require('../assets/wp.png'),
  wq: require('../assets/wq.png'),
  wr: require('../assets/wr.png'),
}