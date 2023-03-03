import logging
import time
from logging.handlers import TimedRotatingFileHandler


class logger:
    def logfilesetup(self):
        # str_cur_date = datetime.now().strftime('%y-%m_%d')
        logger = logging.getLogger('app.log')
        logger.setLevel(logging.DEBUG)
        formatter = logging.Formatter(format('%(asctime)s %(message)s'), datefmt='%Y-%M-%d %I:%M:%S')
        filehandler = TimedRotatingFileHandler('app.log', when='midnight')
        filehandler.suffix = '%Y-%M-%d'
        filehandler.setFormatter(formatter)
        logger.addHandler(filehandler)

        for i in range(10):
            logger.debug(f"Hello World {i + 1}")
            time.sleep(1)
        return logger


log = logger()
log.logfilesetup()
